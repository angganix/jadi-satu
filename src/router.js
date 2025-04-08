import { createWebHistory, createRouter } from "vue-router";

import MainLayout from "./components/layouts/MainLayout.vue";
import GuestLayout from "./components/layouts/GuestLayout.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: () => import("./pages/protected/Home.vue"),
      },
      {
        path: "agenda",
        component: () => import("./pages/protected/Agenda.vue"),
      },
      {
        path: "anggaran",
        component: () => import("./pages/protected/Anggaran.vue"),
      },
      {
        path: "artikel-berita",
        component: () => import("./pages/protected/ArtikelBerita.vue"),
      },
      {
        path: "notifikasi",
        component: () => import("./pages/protected/Notifikasi.vue"),
      },
      {
        path: "pembayaran",
        component: () => import("./pages/protected/Pembayaran.vue"),
      },
      {
        path: "ppjb",
        component: () => import("./pages/protected/Ppjb.vue"),
      },
      {
        path: "profil",
        component: () => import("./pages/protected/Profil.vue"),
      },
      {
        path: "aktifitas",
        component: () => import("./pages/protected/Aktifitas.vue"),
      },
      {
        path: "daftar-jualan",
        component: () => import("./pages/protected/DaftarJualan.vue"),
      },
      {
        path: "bantuan",
        component: () => import("./pages/protected/Bantuan.vue"),
      },
      {
        path: "rumah-saya",
        component: () => import("./pages/protected/RumahSaya.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: GuestLayout,
    children: [
      {
        path: "",
        component: () => import("./pages/auth/Login.vue"),
      },
    ],
  },
  {
    path: "/register",
    component: GuestLayout,
    children: [
      {
        path: "",
        component: () => import("./pages/auth/Register.vue"),
      },
    ],
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;