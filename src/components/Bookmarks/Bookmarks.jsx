import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3">
            <p className="text-3xl text-center bg-gray-300">Bookmarked Blogs:{bookmarks.length}</p>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.array
}

export default Bookmarks;