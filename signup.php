<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Include your HTML head content here -->
    <!-- ... -->
  </head>
  <body>
    <div class="container">
      <h2>Signup</h2>
      <form action="process.php" method="post">
        <input type="hidden" name="action" value="signup" />
        <div class="form-group">
          <label for="signup-username">Username:</label>
          <input type="text" id="signup-username" name="username" required />
        </div>
        <div class="form-group">
          <label for="signup-password">Password:</label>
          <input
            type="password"
            id="signup-password"
            name="password"
            required
          />
        </div>
        <div class="form-group">
          <label for="signup-email">Email:</label>
          <input type="text" id="signup-email" name="email" required />
        </div>
        <button type="submit" class="btn">Signup</button>
      </form>
    </div>
  </body>
</html>
