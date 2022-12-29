import MuxPlayer from '@mux/mux-player-react';
import { defaultComponents, PortableText } from '@portabletext/react';
import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PostStyles = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  h1 {
    padding-top: 5rem;
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
  }
  h2 {
    padding-bottom: 5rem;
    text-align: center;
  }
  video {
    max-width: 1080px;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
  .sectionContent {
    max-width: 500px;
    margin: 0 auto;
    padding: 5rem 2rem;
  }
  @media only screen and (max-width: 320px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;


export default function PostTemplate({ data: { posts } }) {
  return (
    <>
        <div className='nodeParser' key={posts.id}>
          <PostStyles>
            <h1>{posts.title}</h1>
            <h2>Published: {new Date(posts.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).replace(',', '')}</h2>
            {posts.video === null ? 
              <MuxPlayer />
              : <MuxPlayer 
                streamType='on-demand'
                playbackId={posts.video.asset.playbackId}
                metadata={{
                  video_id: `${posts.video.asset.assetId}`,
                  video_title: `${posts.title}`,
                }}
              /> 
            }
            <div className="sectionContent">
              <PortableText 
                value={posts._rawBody}
                components={defaultComponents}
              />
            </div>
          </PostStyles>
        </div>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    posts: sanityPost(slug: { current: { eq: $slug }}) {
        id
        author {
          name
        }
        _rawBody
        categories {
          title
        }
        video {
          asset {
            assetId
            playbackId
          }
        }
        title
        publishedAt
      }
    }   
`;
