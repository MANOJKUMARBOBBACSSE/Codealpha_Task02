// Dummy data for posts
const posts = [
    {
      id: 1,
      user: 'Alice',
      content: 'Had a great day at the park!',
      likes: 5,
      comments: ['Awesome!', 'Glad to hear it!']
    },
    {
      id: 2,
      user: 'Bob',
      content: 'Excited for the weekend!',
      likes: 3,
      comments: ['Me too!', 'What are your plans?']
    }
  ];
  
  // Load posts dynamically
  function loadPosts() {
    const postsContainer = document.querySelector('.posts');
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h3>${post.user}</h3>
        <p>${post.content}</p>
        <button onclick="likePost(${post.id})">Like (${post.likes})</button>
        <div class="comments">
          ${post.comments.map(comment => <p>${comment}</p>).join('')}
          <input type="text" placeholder="Add a comment..." onkeydown="addComment(event, ${post.id})">
        </div>
      `;
      postsContainer.appendChild(postElement);
    });
  }
  
  // Like a post
  function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes += 1;
    document.querySelector('.posts').innerHTML = '';
    loadPosts();
  }
  
  // Add a comment to a post
  function addComment(event, postId) {
    if (event.key === 'Enter') {
      const commentText = event.target.value;
      const post = posts.find(p => p.id === postId);
      post.comments.push(commentText);
      event.target.value = '';
      document.querySelector('.posts').innerHTML = '';
      loadPosts();
    }
  }
  
  // Notifications and friend requests dummy data
  const notifications = [
    'Alice liked your post.',
    'Bob commented on your post.'
  ];
  
  const friendRequests = [
    'John Doe sent you a friend request.',
    'Jane Smith sent you a friend request.'
  ];
  
  // Load notifications
  function loadNotifications() {
    const notificationsContainer = document.getElementById('notifications');
    notifications.forEach(notification => {
      const notificationItem = document.createElement('li');
      notificationItem.textContent = notification;
      notificationsContainer.appendChild(notificationItem);
    });
  }
  
  // Load friend requests
  function loadFriendRequests() {
    const friendRequestsContainer = document.getElementById('friend-requests');
    friendRequests.forEach(request => {
      const requestItem = document.createElement('li');
      requestItem.textContent = request;
      friendRequestsContainer.appendChild(requestItem);
    });
  }
  
  // Initialize everything
  document.addEventListener('DOMContentLoaded', () => {
    loadPosts();
    loadNotifications();
    loadFriendRequests();
  });