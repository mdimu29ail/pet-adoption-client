import React from 'react';
import { Link } from 'react-router';

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Adopting a Dog',
    date: '2025-08-16',
    excerpt:
      'Adopting a dog is a big responsibility. Here are 10 tips to help you choose and care for your new furry friend.',
    image_url:
      'https://i.ibb.co/8DM3PMKf/Whats-App-Image-2025-07-14-at-20-27-57-12d01b1d.jpg',
    link: '/blog/1',
  },
  {
    id: 2,
    title: 'How to Care for Your Cat',
    date: '2025-08-14',
    excerpt:
      'Cats are independent yet loving pets. Learn essential care tips for a happy and healthy cat.',
    image_url:
      'https://i.ibb.co/jkjt18ns/Whats-App-Image-2025-07-14-at-20-27-31-74e93d22.jpg',
    link: '/blog/2',
  },
  {
    id: 3,
    title: 'Top 5 Exotic Pets for Beginners',
    date: '2025-08-12',
    excerpt:
      'Thinking of owning an exotic pet? Discover the best beginner-friendly pets and how to care for them.',
    image_url:
      'https://i.ibb.co/zhMbvXRM/Whats-App-Image-2025-07-14-at-20-27-56-9bd37a21.jpg',
    link: '/blog/3',
  },
  {
    id: 4,
    title: 'How to Train Your Puppy',
    date: '2025-08-10',
    excerpt:
      'Effective puppy training techniques to ensure good behavior and a happy bond with your dog.',
    image_url:
      'https://i.ibb.co/tMf5Yknh/Whats-App-Image-2025-07-14-at-20-27-58-5daff0b2.jpg',
    link: '/blog/4',
  },
  {
    id: 5,
    title: 'Choosing the Right Rabbit for Your Home',
    date: '2025-08-08',
    excerpt:
      'Rabbits can be wonderful pets. Learn how to choose a rabbit that fits your family and lifestyle.',
    image_url:
      'https://i.ibb.co/5xYzf7Fk/Whats-App-Image-2025-07-14-at-20-27-58-ef0f5406.jpg',
    link: '/blog/5',
  },
  {
    id: 6,
    title: 'Aquarium Basics: Fish Care Tips',
    date: '2025-08-06',
    excerpt:
      'A beginner’s guide to setting up and maintaining a healthy aquarium for your fish.',
    image_url:
      'https://i.ibb.co/tPxLtBYd/Whats-App-Image-2025-07-14-at-20-27-59-28d3ee4d.jpg',
    link: '/blog/6',
  },
  {
    id: 7,
    title: 'How to Groom Your Dog at Home',
    date: '2025-08-04',
    excerpt:
      'Learn simple grooming techniques to keep your dog healthy and looking great at home.',
    image_url:
      'https://i.ibb.co/wZfmQRqR/Whats-App-Image-2025-07-14-at-20-27-59-94e68912.jpg',
    link: '/blog/7',
  },
  {
    id: 8,
    title: 'Cat Nutrition: What You Should Know',
    date: '2025-08-02',
    excerpt:
      'A guide to feeding your cat a balanced diet for long-term health and happiness.',
    image_url:
      'https://i.ibb.co/HfHJcHqF/Whats-App-Image-2025-07-14-at-20-27-59-cb30adfd.jpg',
    link: '/blog/8',
  },
  {
    id: 9,
    title: 'Top 10 Dog Breeds for Families',
    date: '2025-07-31',
    excerpt:
      'Discover the best dog breeds that are great with kids and easy to train.',
    image_url:
      'https://i.ibb.co/zhMbvXRM/Whats-App-Image-2025-07-14-at-20-27-56-9bd37a21.jpg',
    link: '/blog/9',
  },
  {
    id: 10,
    title: 'Keeping Your Fish Tank Clean',
    date: '2025-07-29',
    excerpt:
      'Tips and tricks to maintain a clean and healthy environment for your fish.',
    image_url:
      'https://i.ibb.co/tMf5Yknh/Whats-App-Image-2025-07-14-at-20-27-58-5daff0b2.jpg',
    link: '/blog/10',
  },
  {
    id: 11,
    title: 'How to Socialize Your Puppy',
    date: '2025-07-27',
    excerpt:
      'The importance of socialization and how to introduce your puppy to new experiences safely.',
    image_url:
      'https://i.ibb.co/8DM3PMKf/Whats-App-Image-2025-07-14-at-20-27-57-12d01b1d.jpg',
    link: '/blog/11',
  },
  {
    id: 12,
    title: 'Preventing Common Cat Diseases',
    date: '2025-07-25',
    excerpt:
      'Learn how to keep your cat healthy by preventing common illnesses and issues.',
    image_url:
      'https://i.ibb.co/jkjt18ns/Whats-App-Image-2025-07-14-at-20-27-31-74e93d22.jpg',
    link: '/blog/12',
  },
  {
    id: 13,
    title: 'How to Train Birds to Talk',
    date: '2025-07-23',
    excerpt:
      'Simple and effective techniques to teach your parrot or budgie to mimic sounds and words.',
    image_url:
      'https://i.ibb.co/Y7ptydgq/Whats-App-Image-2025-07-14-at-20-25-39-6e39b64d.jpg',
    link: '/blog/13',
  },
  {
    id: 14,
    title: 'Rabbit Housing Tips',
    date: '2025-07-21',
    excerpt:
      'Create a safe and comfortable home for your rabbit with these housing tips.',
    image_url:
      'https://i.ibb.co/5xYzf7Fk/Whats-App-Image-2025-07-14-at-20-27-58-ef0f5406.jpg',
    link: '/blog/14',
  },
  {
    id: 15,
    title: 'Top 5 Aquarium Plants',
    date: '2025-07-19',
    excerpt:
      'Enhance your fish tank with these easy-to-care-for aquatic plants.',
    image_url:
      'https://i.ibb.co/tPxLtBYd/Whats-App-Image-2025-07-14-at-20-27-59-28d3ee4d.jpg',
    link: '/blog/15',
  },
  {
    id: 16,
    title: 'Dog Anxiety: How to Help',
    date: '2025-07-17',
    excerpt:
      'Understand canine anxiety and learn strategies to help your dog feel safe and calm.',
    image_url:
      'https://i.ibb.co/wZfmQRqR/Whats-App-Image-2025-07-14-at-20-27-59-94e68912.jpg',
    link: '/blog/16',
  },
  {
    id: 17,
    title: 'DIY Cat Toys',
    date: '2025-07-15',
    excerpt:
      'Fun and simple toys you can make at home to keep your cat entertained.',
    image_url:
      'https://i.ibb.co/HfHJcHqF/Whats-App-Image-2025-07-14-at-20-27-59-cb30adfd.jpg',
    link: '/blog/17',
  },
  {
    id: 18,
    title: 'How to Handle Aggressive Dogs',
    date: '2025-07-13',
    excerpt:
      'Learn safe methods to manage and train aggressive dogs without causing harm.',
    image_url:
      'https://i.ibb.co/8DM3PMKf/Whats-App-Image-2025-07-14-at-20-27-57-12d01b1d.jpg',
    link: '/blog/18',
  },
  {
    id: 19,
    title: 'Traveling with Pets Safely',
    date: '2025-07-11',
    excerpt:
      'Tips to ensure a safe and comfortable journey for your pets when traveling.',
    image_url:
      'https://i.ibb.co/jkjt18ns/Whats-App-Image-2025-07-14-at-20-27-31-74e93d22.jpg',
    link: '/blog/19',
  },
  {
    id: 20,
    title: 'Top 5 Small Dog Breeds for Apartments',
    date: '2025-07-09',
    excerpt:
      'Best small dog breeds that adapt well to apartment living and urban life.',
    image_url:
      'https://i.ibb.co/tMf5Yknh/Whats-App-Image-2025-07-14-at-20-27-58-5daff0b2.jpg',
    link: '/blog/20',
  },
  {
    id: 21,
    title: 'Cat Behavior Explained',
    date: '2025-07-07',
    excerpt:
      'Decode common cat behaviors and understand what your feline friend is trying to tell you.',
    image_url:
      'https://i.ibb.co/HfHJcHqF/Whats-App-Image-2025-07-14-at-20-27-59-cb30adfd.jpg',
    link: '/blog/21',
  },
  {
    id: 22,
    title: 'Pet Adoption: Benefits for Your Family',
    date: '2025-07-05',
    excerpt:
      'Learn why adopting pets is beneficial for both your family and the animals in need.',
    image_url:
      'https://i.ibb.co/zhMbvXRM/Whats-App-Image-2025-07-14-at-20-27-56-9bd37a21.jpg',
    link: '/blog/22',
  },
  {
    id: 23,
    title: 'How to Handle a Sick Pet',
    date: '2025-07-03',
    excerpt:
      'Steps to care for your sick pet and when to visit a veterinarian.',
    image_url:
      'https://i.ibb.co/tMf5Yknh/Whats-App-Image-2025-07-14-at-20-27-58-5daff0b2.jpg',
    link: '/blog/23',
  },
  {
    id: 24,
    title: 'Building a Dog-Friendly Backyard',
    date: '2025-07-01',
    excerpt:
      'Create a safe and fun backyard space for your dog to play and exercise.',
    image_url:
      'https://i.ibb.co/8DM3PMKf/Whats-App-Image-2025-07-14-at-20-27-57-12d01b1d.jpg',
    link: '/blog/24',
  },
  {
    id: 25,
    title: 'Choosing the Right Bird Cage',
    date: '2025-06-29',
    excerpt: 'Tips for selecting a comfortable and safe cage for your bird.',
    image_url:
      'https://i.ibb.co/Y7ptydgq/Whats-App-Image-2025-07-14-at-20-25-39-6e39b64d.jpg',
    link: '/blog/25',
  },
  {
    id: 26,
    title: 'Pet First Aid Basics',
    date: '2025-06-27',
    excerpt: 'Learn essential first aid techniques for common pet emergencies.',
    image_url:
      'https://i.ibb.co/tPxLtBYd/Whats-App-Image-2025-07-14-at-20-27-59-28d3ee4d.jpg',
    link: '/blog/26',
  },
  {
    id: 27,
    title: 'How to Introduce Pets to Each Other',
    date: '2025-06-25',
    excerpt: 'Guidelines for safely introducing new pets to your household.',
    image_url:
      'https://i.ibb.co/wZfmQRqR/Whats-App-Image-2025-07-14-at-20-27-59-94e68912.jpg',
    link: '/blog/27',
  },
  {
    id: 28,
    title: 'DIY Pet-Friendly Home Projects',
    date: '2025-06-23',
    excerpt:
      'Creative projects to make your home more enjoyable for your pets.',
    image_url:
      'https://i.ibb.co/8DM3PMKf/Whats-App-Image-2025-07-14-at-20-27-57-12d01b1d.jpg',
    link: '/blog/28',
  },
  {
    id: 29,
    title: 'Managing Multiple Pets',
    date: '2025-06-21',
    excerpt: 'Tips for caring for more than one pet in a harmonious way.',
    image_url:
      'https://i.ibb.co/jkjt18ns/Whats-App-Image-2025-07-14-at-20-27-31-74e93d22.jpg',
    link: '/blog/29',
  },
  {
    id: 30,
    title: 'Pet-Friendly Vacation Tips',
    date: '2025-06-19',
    excerpt:
      'Advice for traveling and vacationing with your pets safely and happily.',
    image_url:
      'https://i.ibb.co/zhMbvXRM/Whats-App-Image-2025-07-14-at-20-27-56-9bd37a21.jpg',
    link: '/blog/30',
  },
];

const Blog = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Pet Care & Adoption Tips
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={post.link}
                className="text-orange-500 font-semibold hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
