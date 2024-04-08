import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import TextField from "@mui/material/TextField";

import StandardHeader from "../components/common/StandardHeader";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: 16, marginTop: 24, backgroundColor: "white" }}
    >
      <StandardHeader label={"Login"} />
      <Grid
        container
        spacing={3}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        style={{
          border: "1px solid #ccc",
          padding: 16,
          marginTop: 16,
          borderRadius: 8,
        }}
      >
        <Grid
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={20}
          item
          xs={12}
          md={9}
        >
          <Grid item xs={12} md={6}>
            <TextField
              label="Email"
              name="email"
              type="text"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} marginVertical={20}>
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <div className="textBelowForm">
            <span>Don't have an account?</span>
            <Link
              to="/signup"
              id="link-all-creations"
              className="navbar-artist-creation-link"
            >
              Sign up
            </Link>
          </div>
          <br />
          <Button variant="contained">Login</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Login;
