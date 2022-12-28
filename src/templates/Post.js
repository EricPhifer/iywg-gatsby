import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PostStyles = styled.div`
  
`;


export default function PostTemplate({ data: { posts } }) {
  return (
    <>
        <div className='nodeParser' key={posts.id}>
          <PostStyles>
            
          </PostStyles>
        </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    posts:  sanityPost(slug: { current: { eq: $slug }}) {
        id
        title
      }
    }   
`;
