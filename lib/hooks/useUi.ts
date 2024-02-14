import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {}

const useUi = create<Store>()(
  persist((set) => ({}), {
    name: "ui-storage",
  })
);

export default useUi;
