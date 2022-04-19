import { getUser } from '../libs/localStorageFunctions.js';

(function () {
  if (getUser('user')) {
    document.querySelector('.dynamic__menu').innerHTML = `
		<li class="nav-item ${
      window.location.pathname === '/index.html' ? 'active' : ''
    }">
					<a class="nav-link" href="/index.html">Home</a>
				</li>
				<li class="nav-item ${
          window.location.pathname === '/products.html' ? 'active' : ''
        }">
					<a class="nav-link" href="/products.html">Products</a>
		</li>
		<li class="nav-item ">
			<a class="nav-link ${
        window.location.pathname === '/dashboard.html' ? 'active' : ''
      }" href="/dashboard.html">Go to dashboard</a>
		</li>
		<li class="nav-item">
			<a class="nav-link ${
        window.location.pathname === '/addproducts.html' ? 'active' : ''
      }" href="/addproducts.html">Add a product</a>
		</li>
		<li class="nav-item">
						<a class="nav-link" href="/cart.html"
						><i class="fas fa-shopping-cart"></i
						></a>
		</li>
		<li class="nav-item">
			<button class="logout">Logout</button>
		</li>
	`;
  } else {
    document.querySelector('.dynamic__menu').innerHTML = `
					<li class="nav-item ${
            window.location.pathname === '/index.html' ? 'active' : ''
          }">
						<a class="nav-link" href="/index.html">Home</a>
					</li>
					<li class="nav-item ${
            window.location.pathname === '/products.html' ? 'active' : ''
          }">
						<a class="nav-link" href="/products.html">Products</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/cart.html"
						><i class="fas fa-shopping-cart"></i
						></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/login.html"
						><i class="fas fa-user"></i
						></a>
					</li>
		`;
  }

  const logout = document.querySelector('.logout');
  let keysToRemove = ['user', 'jwt'];

  if (logout !== null) {
    logout.onclick = function () {
      keysToRemove.forEach((k) => localStorage.removeItem(k));

      window.location.href = './index.html';
    };
  }
})();
