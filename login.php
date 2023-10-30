<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Include your HTML head content here -->
    <!-- ... -->
  </head>
  <body>
    <div class="container">
      <h2>Login</h2>
      <form action="process.php" method="post">
        <input type="hidden" name="action" value="login" />
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </body>
</html>
