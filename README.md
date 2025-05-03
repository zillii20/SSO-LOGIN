# SSO-LOGIN

Created a simple single sign-on (SSO) login application built with React and Firebase.

# Features

*Firebase Authentication
*Responsive Image Gallery (static or fetched from mock API)
*Like/Unlike functionality with real-time like count
*Comment System with user mail and text
*Session Persistence using JWT tokens (via Firebase)
*Styled with Tailwind CSS

## Functional Overview

# Login with Google

- Uses Firebase Authentication.
- Stores user session securely using Firebase's built-in JWT handling.
- On login, user is redirected to the gallery.

# Image Gallery

- Displays static images in a responsive layout.
- Each image card shows like count and comments.
- Like / Unlike
- Clicking the like icon toggles like state.
- Like counts update in real-time.

# Comments

- Users can post comments (with their display name).
- All comments are displayed under the corresponding image.

# Technologies Used

- React
- Firebase Authentication
- React Router
- Tailwind CSS

# Future Enhancements

-> Backend integration with a real database (Firestore or Node backend)
-> User-specific like/comment persistence
-> Image upload support
-> Pagination or lazy loading
