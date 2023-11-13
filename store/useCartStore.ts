import { create } from 'zustand';
import { persist } from "zustand/middleware"
import { CartItem, Package, StoreLocale } from '@/types';
import Locales from '@/data/locales';

interface State {
    currency: StoreLocale
    cart: CartItem[]
    totalItems: number
    totalPrice: number
}

interface Actions {
    addToCart: (item: Package) => void
    removeFromCart: (item: CartItem) => void
    updateCurrency: (newCurrency: StoreLocale) => void
}

const INITIAL_STATE: State = {
    currency: Locales['en-US'],
    cart: [],
    totalItems: 0,
    totalPrice: 0,
}

export const useCartStore = create(
    persist<State & Actions>((set, get) => ({
        currency: INITIAL_STATE.currency,
        cart: INITIAL_STATE.cart,
        totalItems: INITIAL_STATE.totalItems,
        totalPrice: INITIAL_STATE.totalPrice,
        addToCart: (cartItem: Package) => {
            const cart = get().cart;
           /*  const itemInCart = cart.find((item) => item.id === cartItem.id);

            if (itemInCart) {
                const updatedCart = cart.map((item) => item.id === cartItem.id
                    ? {
                        ...item, quantity: (item.quantity as number) + 1
                    } : item)
                set((state) => ({
                    cart: updatedCart,
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + cartItem.price,
                }))
                return;
            } */
            const updatedCart = [...cart, { ...cartItem, quantity: 1 }]

            set((state) => ({
                cart: updatedCart,
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + cartItem.price
            }))
        },
        removeFromCart: (cartItem: CartItem) => {
            set((state) => ({
                cart: state.cart.filter((item) => cartItem.id !== item.id),
                totalItems: state.totalItems - 1,
                totalPrice: state.totalPrice - cartItem.price
            }))
        },
        updateCurrency: (newCurrency: StoreLocale) => {
            if (!newCurrency) return;
            set((_) => ({
                currency: newCurrency
            }))
        }
    }), {
        name: 'cart-store'
    }));