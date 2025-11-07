
function OurMission () {

    return (
    <>
        <main className="flex justify-center ">
            <span className="text-left w-full">
                <h1 className="font-extrabold text-center xl:text-left text-5xl py-9">objective</h1>
                <p className="relative px-10 xl:left-5 xl:px-0 pt-5 text-xl text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, illo vero quidem sint tempore id eveniet at saepe excepturi veniam ipsam repellat ex, officiis, architecto quae dolores unde labore dolor.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus officia neque optio temporibus dolorum beatae hic nostrum dignissimos molestiae esse adipisci obcaecati corporis amet consectetur, cumque rem suscipit earum?
                </p>
                <span className=" relative w-full block flex justify-center text-xl font-bold gap-15 items-center top-1/4">
                    <button className="hover:cursor-pointer hover:bg-[var(--color-primary)]/40 bg-[var(--color-primary)] rounded-xl p-4 px-10">I want to help</button>
                    <a className="hover:cursor-pointer text-[var(--color-text)]/60 text-xl hover:text-[var(--color-text)]/70 underline p-4 px-20">See More <span className="font-extrabold text-3xl">&rarr;</span></a>
                </span>
            </span>
            <span className="relative w-full flex justify-center">
                <div className="relative w-fit shadow-2xl z-100 after:w-full after:z-1000 after:h-full after:top-0 after:left-0 after:absolute hover:after:bg-black/50 after:transition">
                <img
                    className=""
                    src="https://plus.unsplash.com/premium_photo-1666721922432-49f64a5db919?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464"
                    alt="animal 1"
                />
                </div>

            </span>
        </main>
    </>
    );
}

export default OurMission