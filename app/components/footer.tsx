export default function footer(){
    return (
        <footer className="py-6 border-amber-950/50 border-t-2 px-2">
            <div className='max-w-6xl mx-auto'>
                <div className='py-2 gap-x-2 flex'>
                    <span>LinkedIn</span>
                    <span>Github</span>
                    <span>Instagram</span>
                </div>
                <div className="justify-end flex">
                    Built with Next.js and TailwindCSS
                </div>
                <div className='text-sm flex justify-end'>
                    <p>Copyright &copy; Jeffrey Berger {new Date().getFullYear()} All rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};
