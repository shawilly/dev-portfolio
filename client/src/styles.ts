const matrixPallet = {
    black: '#0D0D0D',
    brightGreen: '#a4f644',
    green: '#64d86b',
    lessGreen: '#5ec986',
    lightGray: '#6e7598',
    gray: '#414767',
};

const styles = {
    paddingX: 'sm:px-16 px-6',
    paddingY: 'sm:py-16 py-6',
    padding: 'sm:px-16 px-6 sm:py-16 py-10',

    heroHeadText:
        'font-black text-secondary lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2',
    heroSubText:
        'font-medium text-tertiary opacity-80 lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]',

    sectionHeadText: 'text-#F5F5F5 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]',
    sectionSubText: 'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider',

    container:
        "bg-lightblue cursor-[url('https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png')] cursor-pointer",

    deck: 'absolute w-[300px] h-[200px] transform will-change flex items-center justify-center touch-none',

    deckDiv:
        'touch-none bg-#F5F5F5 bg-[auto 85%] bg-no-repeat bg-center w-[45vh] max-w-[300px] h-[85vh] max-h-[570px] transform will-change border rounded-lg shadow-lg',
};

export { styles, matrixPallet };
