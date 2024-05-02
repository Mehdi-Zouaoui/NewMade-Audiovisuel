import { create } from "zustand";
import { createClient } from "./utils/supabase/client";
const supabase = createClient();

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
export const useSpeakers = create((set) => ({
  getSpeakers: async () => {
    try {
      const { data, error } = await supabase
        .from("speaker")
        .select()
        .order("id", { ascending: false });
      if (error) throw error;
      else return data;
    } catch (e) {}
  },
}));
