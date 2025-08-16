import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import animationData from '../assets/login.json';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';
import Logo from '../Components/Logo/Logo';
import Container from '../Container/Container';
import GithubLogin from './GithubLogin';

const Login = () => {
  const { logIn, signinWithGoogle } = useAuth();
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    logIn(data.email, data.password)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Login successful!',
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Login failed',
          text: error.message,
        });
      });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signinWithGoogle();
      const user = result.user;

      const userInfo = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        role: 'user',
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      };

      let userExists = false;
      try {
        await axiosInstance.get(`/users/${user.email}`);
        userExists = true;
      } catch {
        userExists = false;
      }

      if (!userExists) {
        await axiosInstance.post('/users', userInfo);
      }

      Swal.fire({
        icon: 'success',
        title: 'Logged in with Google!',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
      });

      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Google login failed', 'error');
    }
  };

  const inputStyle =
    'w-full px-5 py-3 rounded-full bg-[#b0c4de] flex items-center justify-center gap-3 text-gray-700';

  const orange = '#ff6600';
  const orangeHover = '#cc5200';

  return (
    <div className="bg-gradient-to-tr from-[#ffecd1] to-[#fff3e0]">
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <div className="hero min-h-screen animated-bg">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* Lottie Animation */}
            <div className="text-center lg:text-left w-full max-w-md">
              <Lottie animationData={animationData} loop />
            </div>

            {/* Login Form */}
            <div className="card bg-white w-full max-w-sm shadow-2xl">
              <div className="p-6 rounded-md dark:bg-gray-50 dark:text-gray-800">
                <h2
                  className="text-2xl font-bold text-center mb-4"
                  style={{ color: orange }}
                >
                  Login to your account
                </h2>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 mb-6"
                  style={{ color: orange }}
                >
                  {/* Email */}
                  <div className="space-y-1 text-sm">
                    <label className="block" style={{ color: orange }}>
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
                    <label className="block" style={{ color: orange }}>
                      Password
                    </label>
                    <input
                      type="password"
                      {...register('password', { required: true })}
                      placeholder="Password"
                      className={inputStyle}
                    />
                    {errors.password && (
                      <p className="text-red-500">Password is required</p>
                    )}
                    <div className="flex justify-end text-xs">
                      <a
                        href="#"
                        style={{ color: orange }}
                        className="hover:underline"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>

                  <button
                    className="btn w-full rounded-full text-white"
                    style={{ backgroundColor: orange }}
                    onMouseEnter={e =>
                      (e.currentTarget.style.backgroundColor = orangeHover)
                    }
                    onMouseLeave={e =>
                      (e.currentTarget.style.backgroundColor = orange)
                    }
                    type="submit"
                  >
                    Login
                  </button>
                </form>

                <p className="text-sm text-center" style={{ color: orange }}>
                  Don't have an account?
                  <Link
                    to="/register"
                    className="ml-2 font-bold"
                    style={{ color: orange }}
                  >
                    Register
                  </Link>
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center w-full my-4 px-6">
                <hr className="w-full" style={{ borderColor: orange }} />
                <p className="px-3" style={{ color: orange }}>
                  OR
                </p>
                <hr className="w-full" style={{ borderColor: orange }} />
              </div>

              {/* Google Login */}
              <div className="mb-6 px-6">
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center w-full p-3 space-x-4 rounded-full text-white"
                  style={{ backgroundColor: orange }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.backgroundColor = orangeHover)
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.backgroundColor = orange)
                  }
                >
                  <FaGoogle size="30px" />
                  <p>Login with Google</p>
                </button>

                <div className="w-full mt-3">
                  <GithubLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
