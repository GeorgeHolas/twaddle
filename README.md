# Twaddle

Twaddle is a modern chat application built with Next.js 14, React, and MongoDB. It allows users to create accounts, chat with friends, and join group conversations. The app features real-time messaging using Pusher, image uploads with Cloudinary, and authentication with Next-Auth.

## Features

- **User authentication** with email and password
- **One-on-one and group chat** functionality
- **Real-time messaging** with Pusher
- **Image upload and display** with Cloudinary
- **Responsive design** for desktop and mobile devices

## Technologies Used

- **Next.js 14** (React, Server Components)
- **MongoDB** (with Mongoose)
- **Pusher** (for real-time messaging)
- **Cloudinary** (for image uploads)
- **Next-Auth** (for authentication)
- **Tailwind CSS** (for styling)
- **React Hook Form** (for form handling)
- **React Hot Toast** (for notifications)

# Getting Started
1. Clone the repository

2. Install dependencies:
- cd twaddle
- npm install

3. Set up environment variables:
Create a .env.local file in the root directory and add the following variables:
- MONGO_URI=(your-mongodb-uri)
- NEXT_PUBLIC_PUSHER_APP_KEY=(your-pusher-app-key)
- PUSHER_APP_ID=(your-pusher-app-id)
- PUSHER_SECRET=(your-pusher-secret)
- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=(your-cloudinary-cloud-name)
- CLOUDINARY_API_KEY=(your-cloudinary-api-key)
- CLOUDINARY_API_SECRET=(your-cloudinary-api-secret)
- NEXTAUTH_SECRET=(your-nextauth-secret)

4. Start the development server:
- npm run dev
- Open http://localhost:3000 in your browser to see the app.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
