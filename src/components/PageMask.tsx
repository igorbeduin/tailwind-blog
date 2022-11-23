import React from "react";
import { Outlet } from "react-router-dom";

export default function PageMask() {
    return (
        <>
            <header>
                <section>
                    <nav>
                        {/* links para navegação de paginas */}
                    </nav>
                </section>
                <section>
                    {/* links para redes sociais */}
                </section>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
