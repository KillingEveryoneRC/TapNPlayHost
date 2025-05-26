import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/pages/Home.vue';
import Login from '/src/pages/Login.vue';
import Register from '/src/pages/Register.vue';
import Games from '/src/pages/Games.vue';
import Profile from '/src/pages/Profile.vue';
import About from '/src/pages/About.vue';
import Badges from '/src/pages/Badges.vue';
import Records from '/src/pages/Records.vue';
import Forum from '/src/pages/Forum.vue';
//games
import Minesweeper from '/src/games/Minesweeper.vue';
import CandyCrush from '/src/games/CandyCrush.vue';
import Tetris from '/src/games/Tetris.vue';
import Snake from '/src/games/Snake.vue';
import { auth } from '/src/firebase';
import { onAuthStateChanged } from 'firebase/auth';

let authReady = new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, () => {
        unsubscribe(); // only trigger once
        resolve();
    });
});

// Helpers
const waitForAuth = async () => {
    await authReady;
};

// Guards
const requireAuth = async (to, from, next) => {
    await waitForAuth();
    const user = auth.currentUser;
    if (user) next();
    else next('/login');
};

const notAuth = async (to, from, next) => {
    await waitForAuth();
    const user = auth.currentUser;
    if (!user) next();
    else next('/profile');
};

const routes = [
    // General
    { path: 'TapNPlayHost/', component: Home },
    { path: 'TapNPlayHost/games', component: Games, beforeEnter: requireAuth },
    { path: 'TapNPlayHost/about', component: About},
    { path: 'TapNPlayHost/forum', component: Forum},
    // Authorisation
    { path: 'TapNPlayHost/login', component: Login, beforeEnter: notAuth },
    { path: 'TapNPlayHost/register', component: Register, beforeEnter: notAuth },
    // Profile
    { path: 'TapNPlayHost/profile', component: Profile, beforeEnter: requireAuth },
    { path: 'TapNPlayHost/badges', component: Badges, beforeEnter: requireAuth},
    { path: 'TapNPlayHost/records', component: Records, beforeEnter: requireAuth},
    // Games
    { path: 'TapNPlayHost/games/minesweeper', component: Minesweeper, beforeEnter: requireAuth },
    { path: 'TapNPlayHost/games/candycrush', component: CandyCrush, beforeEnter: requireAuth },
    { path: 'TapNPlayHost/games/tetris', component: Tetris, beforeEnter: requireAuth },
    { path: 'TapNPlayHost/games/snake', component: Snake, beforeEnter: requireAuth },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

