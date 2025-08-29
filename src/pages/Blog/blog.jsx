import React from 'react'
import { BlogWrapper } from './Blog.style'
import { Typography } from '../../components'
import { Blogs } from '../Home/components'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  return (
    <div className="container">
      <BlogWrapper>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}>
          <Link to="/" style={{ textDecoration: "none", color: "#454545" }}>
            Главная
          </Link>
          <Typography type='text' text=' > Блог' />
        </div>
        <Typography styles={{ marginTop: '0' }} type='h1' text='Блог' />
        <Blogs />
        <Blogs />
      </BlogWrapper>
    </div>
  )
}

export default BlogPage