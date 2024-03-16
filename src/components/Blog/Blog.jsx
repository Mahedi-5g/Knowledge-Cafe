import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark,handleMarkAssRead}) => {
    const {title,cover,author,author_img,posted_date,hashtag, reading_time} = blog;
    return (
        <div className='my-8'>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mt-3 mb-4 '>
                <div className='flex'>
                    <img className='w-14 rounded-full mr-6' src={author_img}  alt="" />
                    <div>
                      <span>{author}</span><br />
                      <span>{posted_date}</span>  
                    </div>
                    

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-2xl'><FaBookmark></FaBookmark></button>
                </div>

            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtag.map(hash => <span key={hash} className='mr-2'><a href="">{hash}</a></span>)
                }
            </p>
            <button>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.function
}

export default Blog;