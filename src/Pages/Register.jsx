import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import animationData from '../assets/register.json';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';

// ImgBB Upload component inside the same file for simplicity
const ImgBBUpload = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  // Replace with your actual imgbb API key
  const IMGBB_API_KEY = import.meta.env.VITE_image_upload_key;

  const handleFileChange = async e => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await res.json();
      if (data.success) {
        onUpload(data.data.display_url);
      } else {
        setError('Upload failed. Try again.');
      }
    } catch (err) {
      setError('Upload error. Try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-1 mb-4">
      <label className="block text-orange-600 font-semibold">
        Upload Profile Photo
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
        className="w-full border border-orange-400 rounded px-3 py-2"
      />
      {uploading && <p className="text-sm text-orange-600">Uploading...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const onSubmit = async data => {
    try {
      // 1. Create Firebase user
      const result = await createUser(data.email, data.password);
      const user = result.user;

      // 2. Update profile
      await updateUserProfile({
        displayName: data.name,
        photoURL: data.photoURL,
      });

      // 3. Prepare user data for backend
      const userInfo = {
        name: data.name,
        email: data.email,
        photoURL: data.photoURL,
        role: 'user',
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      // 4. Save user info to MongoDB backend
      await axiosInstance.post('/users', userInfo);

      // 5. Success message & redirect
      Swal.fire({
        icon: 'success',
        title: 'Registration successful!',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
      });

      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Registration failed',
        text: err.message,
      });
    }
  };

  const inputStyle =
    'w-full px-5 py-3 rounded-full bg-[#ffecd1] text-[#ff6600] border border-[#ff6600] focus:outline-none focus:ring-2 focus:ring-[#ff6600]';

  // Handle imgBB upload URL set to react-hook-form photoURL
  const handlePhotoUpload = url => {
    setValue('photoURL', url, { shouldValidate: true });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-tr from-[#ffecd1] to-[#fff3e0]">
      <div className="hero-content flex-col lg:flex-row">
        {/* Left animation */}
        <div className="text-center lg:text-left w-full max-w-md">
          <Lottie animationData={animationData} loop />
        </div>

        {/* Right form */}
        <div className="card bg-transparent w-full max-w-sm shadow-2xl">
          <div className="p-6 rounded-md bg-white">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#ff6600]">
              Create your account
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6">
              {/* Name */}
              <div className="space-y-1 text-sm">
                <label className="block text-[#ff6600] font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  placeholder="Your name"
                  className={inputStyle}
                />
                {errors.name && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>

              {/* Photo Upload */}
              <ImgBBUpload onUpload={handlePhotoUpload} />
              {errors.photoURL && (
                <p className="text-red-500">Profile photo is required</p>
              )}
              {/* Hidden photoURL field */}
              <input
                type="hidden"
                {...register('photoURL', { required: true })}
              />

              {/* Email */}
              <div className="space-y-1 text-sm">
                <label className="block text-[#ff6600] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  placeholder="Email"
                  className={inputStyle}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1 text-sm">
                <label className="block text-[#ff6600] font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  {...register('password', { required: true, minLength: 6 })}
                  placeholder="Password"
                  className={inputStyle}
                />
                {errors.password?.type === 'required' && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === 'minLength' && (
                  <p className="text-red-500">Must be at least 6 characters</p>
                )}
              </div>

              <button className="btn w-full rounded-full bg-[#ff6600] text-white hover:bg-[#cc5200]">
                Register
              </button>
            </form>

            <p className="text-sm text-center text-[#ff6600]">
              Already have an account?
              <Link to="/login" className="ml-2 font-bold hover:underline">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
