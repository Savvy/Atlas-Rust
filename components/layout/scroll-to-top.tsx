'use client'
import { mdiArrowUp } from "@mdi/js";
import Icon from "@mdi/react";
import clsx from "clsx";

export default function ScrollToTop() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div onClick={() => goToTop()} className={clsx(
            "flex items-center gap-2 cursor-pointer",
            "opacity-60 hover:opacity-100 select-none",
            "transition-opacity duration-300 ease-in-out"
        )}>
            <div className="bg-secondary-accent hover:bg-secondary-accent/80 p-3 rounded-full transition-colors duration-300 ease-in-out">
                <Icon path={mdiArrowUp}
                    size={0.6}
                    color="white"
                />
            </div>
            <span>Back To The Top</span>
        </div>
    )
}