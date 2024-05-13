import { create } from "zustand";
import { createClient } from "./utils/supabase/client";

export const useCart = create((set) => ({
  products: [],
  addItem: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeItem: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    })),
  clearCart: () => set({ products: [] }),
}));

export const useAdminPage = create((set) => ({
  adminPage: "products",
  setCurrentAdminPage: (adminPage) => set(() => ({ adminPage: adminPage })),
}));
