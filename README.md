# SODOTO - Share One, Do One, Teach One

Welcome to SODOTO, a platform designed for learners to share, reinforce, and teach their knowledge with others. Whether you're here to learn, teach, or simply share your thoughts, SODOTO provides an interactive space for knowledge exchange.

## Getting Started

1. **Clone Repository:** After cloning the repository, navigate to the project directory in your terminal.

2. **Install Dependencies:** Run `npm install` in your terminal to install the necessary dependencies.

3. **Database Configuration:** Replace the `mongoAtlasUri` variable with the URI provided in Slack for database connectivity.

4. **Run in Development Mode:** Execute `npm run dev` to start the project in development mode.

## Pull Request Workflow

- Create your own branch and make commits for your changes.
- When ready to push, follow these steps:
    ```
    git checkout dev
    git pull origin dev
    git checkout [yourbranch]
    git merge dev
    git push origin [yourbranch]
    ```
- Create a pull request from your branch to `dev`.
- Notify a reviewer for PR approval.

## How It Works

### For Learners

- Explore a world of knowledge by searching for your favorite topics on the home page.
- Discover intriguing subjects and delve into comprehensive teaching demonstrations.
- Watch engaging videos or read through instructive content.
- Actively participate by leaving feedback or asking questions in the comments to enhance your learning experience.

### For Teachers

- Take an active role in sharing your knowledge by clicking on "Create New Teaching Demonstration" from the home page.
- Easily add your content by uploading or linking a video or by crafting a blog-style text description.
- Be attentive to the community—anticipate questions and feedback in the comments section.
- Elevate the learning experience for everyone by providing thoughtful responses and fostering ongoing discussion.

### For Sharers

- Share your thoughts and exchange ideas with others in the comments section.
- Engage in meaningful discussions to enrich the learning experience for all users.

## Technologies Used

- React
- Bootstrap
- Cloudinary
- MongoDB
- Multer
- Sass
- Express

SODOTO was created during a GDI hackathon project where we had limited time to build this application. Here at SODOTO, we believe that true mastery of a subject comes with the ability to teach it to others. Join us in our mission to foster a community of lifelong learners and educators.

Start exploring, learning, teaching, and sharing with SODOTO today!
