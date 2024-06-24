import User from "@models/User";
import { connectToDB } from "@mongodb";
import { hash } from "bcryptjs";

export const POST = async (req, res) => {
  try { 
    await connectToDB();

    const body = await req.json();
    console.log("Request body:", body);

    const { username, email, password } = body;

    // Validate input
    if (!username || !email || !password) {
      console.error("Missing required fields");
      return new Response("Missing required fields", {
        status: 400,
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.error("User already exists with email:", email);
      return new Response("User already exists", {
        status: 400,
      });
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("New user created:", newUser);

    // Return user
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (err) {
    console.error("Error in POST /api/auth/register:", err.message);
    console.error("Error details:", err.stack);
    return new Response(JSON.stringify({ error: "Failed to create a new user" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
