import { AspectRatio } from "@/components/ui/aspect-ratio";
import Atlas from "@/components/icons/atlas";

export default function Map() {
    return (
        <>
            <section className="hidden md:block container mt-24 py-4">
                <div className="flex flex-col gap-3 justify-center items-center mb-20">
                    <h3 className="text-3xl">The most competitive servers in Rust.</h3>
                    <h5 className="text-xl text-muted">See the most played places.</h5>
                </div>
                <div className="w-full">
                    <AspectRatio ratio={16 / 9} className="grid place-items-center">
                        <Atlas />
                    </AspectRatio>
                </div>
            </section>
            <section className="container text-center py-4">
                <h5 className="text-lg md:hidden">Map not visible on mobile.</h5>
            </section>
        </>
    )
}