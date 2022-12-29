import MuxPlayer from '@mux/mux-player-react';
import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HomeStyles = styled.main`
  max-width: 1080px;
  margin: 4rem auto 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  justify-items: center;
  gap: 2rem;
  .header {
    grid-column: 1 / span 3;
    margin-top: 5rem;
    margin-bottom: 5rem;
    h1 {
      text-transform: uppercase;
      font-size: 4rem;
      text-align: center;
    }
    h2 {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 2rem 3rem;
      font-size: 2rem;
      text-align: center;
    }
    .headVideo {
      max-width: 1080px;
      width: 100vw;
      margin: 0;
      padding: 0;
    }
  }
  .sectionTitle {
    width: 83.5%;
    grid-column: 1 / span 3;
    text-align: left;
    font-size: 3rem;
    padding-bottom: 2rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.25rem;
    color: var(--gray);
  }
  .postCard {
    width: 350px;
    height: 250px;
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    .header, .sectionTitle {
      grid-column: 1 / span 2;
    }
  }
  @media only screen and (max-width: 780px) {
    grid-template-columns: repeat(1, minmax(auto, 1fr));
    .postCard {
      width: 400px;
      height: 300px;
    }
    .header, .sectionTitle {
      grid-column: 1 / span 1;
    }
  }
  @media only screen and (max-width: 440px) {
    .postCard {
      width: 280px;
      height: 225px;
    }
  }
`;


export default function HomeTemplate({data}) {
  const posts = data.posts.nodes;
  return (
    <>
      <HomeStyles>
        <div className='header'>
          <h1>What Makes a website good or bad?</h1>
          <h2>
            Six categories that make or break a website and the one thing that rules them all
          </h2>
          <MuxPlayer className='headVideo'/>
        </div>
        <h2 className='sectionTitle'>Website Reviews</h2>
        {posts.map((post) => (
          <div className='postCard' key={post.id}>
            <MuxPlayer />
            <Link to={`/posts/${post.slug.current}`} >
              <h3>{post.title}</h3>
            </Link>
            <h4>Video by: {post.author.name}</h4>
          </div>
        ))}
      </HomeStyles>
    </>
  )
}

export const query = graphql`
  query {
    posts: allSanityPost {
        nodes {
          id
          author {
            name
            id
          }
          title
          slug {
            current
          }
          video {
            asset {
              playbackId
              assetId
            }
          }
        }
      }
    }   
`;