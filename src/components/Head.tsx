/**
 * @copyright 2024 codewithsadee
 * @license MIT
 * @description Assets for the app
 */

import {Helmet} from 'react-helmet'

type headprops = {
    title:string;
};

const Head: React.FC<headprops> = ({ title }) => {
  return (
    <Helmet>
        <title>{title}</title>
    </Helmet>
  )
}

export default Head