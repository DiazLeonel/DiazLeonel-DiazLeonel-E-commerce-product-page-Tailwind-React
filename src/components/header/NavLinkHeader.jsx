export default ({ text }) => {
    return <a href="#" className='py-8 relative group'>
        <span className="group-hover:text-orage-primary scale-x-0 group-hover:scale-x-100 transition-all duration-500">{text}</span>
        <span className="absolute block w-full h-1 br group-hover:bg-orage-primary bottom-0 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
    </a>
}