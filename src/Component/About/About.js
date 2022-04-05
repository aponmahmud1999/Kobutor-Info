import React from 'react';

const About = () => {
    return (
      <div className="justify-center font-bold text-lg mt-[100px] flex border-8 m-8 p-8 hover:bg-cyan-100">
        <div><img className='w-80' src='https://scontent.fdac80-1.fna.fbcdn.net/v/t1.6435-9/127650345_3419060588208981_8997823046365866826_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEcZQMxr5bdtcCHKeRvEBfBZG5m4r5JrspkbmbivkmuytavqxqAmei00Tt8vrKAAAU3DfIhJxD5GEr1XvY3O3RM&_nc_ohc=z39_MUbrzcgAX95XQn_&_nc_ht=scontent.fdac80-1.fna&oh=00_AT_xx7ZIyA8NznsC2s8t2IZagQYrv9vs32czEV7D_XC7Sw&oe=62716810'></img></div>
        <div className='m-5'>
        <h2 className="flex justify-center">My name is Apon Mahmud</h2>
        <h3 className="flex justify-center">My University name is Bangladesh Army University of Science and Technology</h3>
        <p className="flex justify-center">Saidpur,Nilphamari,Bangladesh</p>
        </div>
      </div>
    );
};

export default About;