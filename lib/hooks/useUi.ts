import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  productView: any;
  setProductView: (val: any) => void;
}

const useUi = create<Store>()(
  persist(
    (set) => ({
      productView: null,
      setProductView: (val) => set({ productView: val }),
    }),
    {
      name: "ui-storage",
    }
  )
);

export default useUi;
