import { Request, Response } from "express";
import User from "../schemas/User";
import jwt from "jsonwebtoken";


class UserController {
  async getAll(request: Request, response: Response) {
    try {
      const users = await User.find();
      return response.json(users);
    } catch (error) {
      return response.status(500).send({
        error: "Error",
        message: error,
      });
    }
  }

  async create(request: Request, response: Response) {
    const { name, email, mobile, phone, password, createdAt } = request.body;
    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return response.status(400).json({
          message: "User already  exits",
        });
      }
      const user = await User.create({
        name,
        email,
        mobile,
        phone,
        password,
        createdAt,
      });
      return response.json(user);
    } catch (error) {
      return response.status(500).send({
        error: "Registration failed",
        message: error,
      });
    }
  }

  async update(request: Request, response: Response) {
    const { name, email, mobile, phone, password, createdAt } = request.body;
    try {
      await User.findOneAndUpdate(
        { email: email },
        {
          name,
          email,
          mobile,
          phone,
          password,
          createdAt,
        }
      );

      return response.json({ status: "user update!" });
    } catch (error) {
      return response.status(500).send({
        error: "Update failed",
        message: error,
      });
    }
  }

  async delete(request: Request, response: Response) {
    const { email } = request.query;
    try {
      await User.deleteOne({ email });
      return response.json({ status: "Deleted!" });
    } catch (error) {
      return response.status(500).send({
        error: "Registration failed",
        message: error,
      });
    }
  }

  async login(request: Request, response: Response) {
    const { email, password } = request.body;
    try {
      const userExists = await User.findOne({ email, password });
      if (!userExists)
        return response.status(401).json({ message: "User not found!" });
      const { _id } = userExists;
      const newToken = jwt.sign(
        {
          userId: _id,
          email,
        },
        "123456",
      );

      return response.status(200).json({ token: newToken})
    } catch (error) {
      return response.status(500).send({
        error: "Registration failed",
        message: error,
      });
    }
  }
}

export default new UserController();
