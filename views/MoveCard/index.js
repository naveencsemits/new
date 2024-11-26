import React from 'react'
import PropTypes from 'prop-types'
import WindowScreen from '../../components/WindowScreen'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle';

const WindowImage = ({ src }) => (
    <HoverImage
        showFilter
        imageClassName='mo-image'
        src={src}
    />
)

const getSide = (index) => index % 2 ? 'left' : 'right'

// const SingleProject = (props) => {
//     const { image, index } = props
//     const side = getSide(index);
//     return (
//         <div className='mo-projects-single'>
//             <div className='row'  >

//                 <div className='col-6 d-none d-lg-block '>
//                     <div
//                     data-aos={`zoom-in-${side}`}
//                     >
                       
//                         <WindowScreen containerClassName={`mo-projects-image-container mo-projects-image-container-${side}`}>
//                             <WindowImage src={image} />
//                         </WindowScreen>
//                     </div>
//                 </div>
                
//                 <div className={`col-12 col-lg-6 d-flex align-items-center ${side === 'right' ? 'order-first' : ''}`}>
//                     <ProjectTextSide {...props} />
//                     {/* <p style={{"color":"blue"}}>hello</p> */}

//                 </div>
//             </div>
//         </div>
//     )
// }

const SingleProject = (props) => {
    const { image, index, title, description, techs } = props;
    const side = getSide(index);

    return (
        <div className="mo-projects-single"  data-aos={`zoom-in-${side}`}>
            <div className={`mo-projects-image-container mo-projects-image-container-${side}`}>
                <WindowImage src={image} />
            </div>
            <div className={`mo-projects-text-side ${side === 'right' ? 'order-first' : ''}`}>
                <h3 className="mo-projects-text-title">{title}</h3>
                <p className="mo-projects-text-description">{description}</p>
                <div className="mo-projects-text-tecs">
                    {techs.join(' | ')}
                </div>
            </div>
        </div>
    );
};


const ProjectTextSide = (props) => {
    const { label, title, description, techs, index, image } = props
    const side = getSide(index);
    return (
        <div
            data-aos={`fade-down-${side}`}
            className={`mo-projects-text-side  mo-projects-text-side-${side}`}>
        
            <div
                data-aos={`zoom-in-${side}`}
                style={{
                    backgroundImage:
                      "linear-gradient(222deg, rgb(158, 73, 82), rgb(220, 146, 110))",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    
                  }}
                className='mo-projects-text-title'>{title}</div>
            <div
                data-aos={`zoom-in-${side}`}
                className='mo-projects-text-description'>
                {description}
                <div className='mt-4 d-block d-lg-none'>
                    <WindowScreen containerClassName={`mo-text-image-container`}>
                        <WindowImage src={image} />
                    </WindowScreen>
                </div>
            </div>
            <div
                data-aos={`zoom-in-${side}`}
                className='mo-projects-text-tecs'>
                {techs.map((tech, i) => `${tech} ${techs.length - 1 !== i ? ' | ' : ''}`)}
            </div>
        </div>
    )
}

const MovableCard = ({ data: {
    heading,
    list
} }) => {
    return (
        <div className='mo-projects '>
            <div className='container'>
                <div className='mo-projects-container '>
                    {/* <ViewsTitle text={heading} /> */}
                    <div className='row justify-content-center'>
                        {(list || []).map((project, i) => (
                            <SingleProject
                                key={i}
                                index={i}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

MovableCard.propTypes = {}

export default MovableCard


// components/Timeline.js

// import React from 'react';

// const MovableCard = () => {
//   const stages = [
//     {
//       title: 'Stage 1',
//       content: 'This is the content for stage 1. Here we describe what happens in this stage.',
//       imageUrl: '/images/pluswoman1.jpg', // Make sure to replace with your actual image path
//     },
//     {
//       title: 'Stage 2',
//       content: 'This is the content for stage 2. This stage focuses on the next steps.',
//       imageUrl: '/images/pluswoman2.jpg', // Replace with your actual image path
//     },
//     {
//       title: 'Stage 3',
//       content: 'This is the content for stage 3. Finally, we conclude with this stage.',
//       imageUrl: '/images/pluswoman8.jpg', // Replace with your actual image path
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center">
//       {stages.map((stage, index) => (
//         <div key={index} className="flex flex-col md:flex-row items-center mb-10 mt-10">
//             <div className="w-full md:w-1/2">
//             <img src={stage.imageUrl} alt={stage.title} className="rounded-lg shadow-lg w-[80%] h-[80%]" />
//           </div>
//           <div className="w-full md:w-1/2 p-5">
//             <h2 className="text-2xl font-bold mb-2">{stage.title}</h2>
//             <p className="text-gray-700">{stage.content}</p>
//           </div>
          
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovableCard;