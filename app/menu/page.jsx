import { HeaderProp, Nav } from "@/components"
import { Menu1, Menu2, Menu3 } from "@/components/AllMenu"




const page = () => {
    return (
        <main>
            <section className='bg-[url("/Rectangle2.png")] space-y-[100px] bg-cover bg-no-repeat'>
                <Nav />
                <HeaderProp fontt='font-bold text-7xl' font='font-bernier' text='Our Menu' />
            </section>
            <Menu1 />
            <Menu3 />
            <Menu2 />
        </main>
    )
}

export default page