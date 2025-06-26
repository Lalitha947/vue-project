<template>
    <aside>
        <div class="sidebar" id="mySidebar">
            <div class="sidebar-header">
                <h1>ModernTech Solutions</h1>
                <img src="@/assets/Logo.jpg" alt="ModernTech Solutions Logo">
            </div>
            <nav>
                <ul>
                    <button>
                        <li><router-link to="/" id="nav-link">Home Page </router-link></li>
                    </button>
                    <button>
                        <li><router-link to="/employees" id="nav-link">Employees </router-link></li>
                    </button>
                    <button>
                        <li><router-link to="/payroll" id="nav-link">Payroll</router-link></li>
                    </button>
                    <button>
                        <li><router-link to="/leave-requests" id="nav-link">Leave </router-link></li>
                    </button>
                    <button>
                        <li><router-link to="/attendance" id="nav-link">Attendance </router-link></li>
                    </button>
                </ul>
            </nav>
        </div>
        <div id="main">
            <button class="openbtn" @click="toggleSidebar()">☰ Open Sidebar</button>
        </div>
    </aside>
</template>
<script>

export default {
    name: "SideBarComp",
    methods: {
        openNav() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        },
        closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        },
        toggleSidebar() {
            const sidebar = document.getElementById("mySidebar");
            if (sidebar.style.width === "0px" || sidebar.style.width === "") {
                sidebar.style.width = "250px";
            } else {
                sidebar.style.width = "0px";
            }
        }
    }
}

</script>
<style scoped>
.sidebar {
    width: 250px;
    height: 100vh;
    background-color: #afbae5;
    color: #FFFFFF;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    font-size: medium;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-link {
    display: block;
    padding: 50px;
    color: #FFFFFF;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 500;
    transition: background-color 0.3s ease;
    text-decoration: none;
}

button {
    background-color: #afbae5;
    padding: 25px;
    width: 250px;
    margin-left: -50px;
    border: none;
}

button:hover {
    background-color: rgb(111, 111, 173);
}

#nav-link {
    text-decoration: none;
}

.router-link-active {
    color: rgb(39, 39, 186);
}

h1 {
    font-size: x-large;
    margin-top: -20px
}

.sidebar-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 10px;
    margin-left: -15px;
    margin-bottom: -20px;
}

.sidebar-header img {
    width: 100px;
    height: 80px;
    object-fit: cover;
}

.openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 10px 15px;
    border: none;
}

.openbtn:hover {
    background-color: #444;
}

#main {
    transition: margin-left .5s;
    padding: 20px;
}
</style>
