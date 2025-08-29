import React from 'react'
import Img1 from '../../../../assets/images/homeInBlog.svg'
import Img2 from '../../../../assets/images/homeInBlog2.svg'
import Img3 from '../../../../assets/images/homeInBlog3.svg'
import upward from '../../../../assets/images/upward.svg'
import { Typography } from '../../../../components'
import { Blogs } from './Blog.style'

const Blog = () => {
  return (
    <div className="container">
      <Blogs>
        <div style={{ borderBottom: '1px solid rgba(242,242,242,1)' }}>
          <img src={Img1} style={{ maxWidth: '380px', width: '100%' }} alt="" />
          <div>
            <Typography type='text' styles={{ width: '290px' }} text='Как правильно освещать дом снаружи?' />
            <img src={upward} alt="" style={{ cursor: 'pointer' }} />
          </div>
          <Typography type='menu' text='01.01.2024' />
        </div>

        <div style={{ borderBottom: '1px solid rgba(242,242,242,1)' }}>
          <img src={Img2} style={{ maxWidth: '380px', width: '100%' }} alt="" />
          <div>
            <Typography type='text' styles={{ width: '290px' }} text='Как правильно освещать дом снаружи?' />
            <img src={upward} alt="" style={{ cursor: 'pointer' }} />
          </div>
          <Typography type='menu' text='01.01.2024' />
        </div>

        <div style={{ borderBottom: '1px solid rgba(242,242,242,1)' }}>
          <img src={Img3} style={{ maxWidth: '380px', width: '100%' }} alt="" />
          <div>
            <Typography type='text' styles={{ width: '290px' }} text='Как правильно освещать дом снаружи?' />
            <img src={upward} alt="" style={{ cursor: 'pointer' }} />
          </div>
          <Typography type='menu' text='01.01.2024' />
        </div>
      </Blogs>
    </div>
  )
}

export default Blog
