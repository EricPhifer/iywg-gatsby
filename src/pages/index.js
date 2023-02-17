import MuxPlayer from '@mux/mux-player-react';
import { graphql, Link } from 'gatsby';
import React from 'react'; //eslint-disable-line
import styled from 'styled-components';
import Seo from '../components/Seo';

const HomeStyles = styled.main`
    max-width: 1080px;
    margin: 10rem auto 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    justify-items: center;
    gap: 2rem;
    .header {
        max-height: 62vh;
        position: relative;
        display: grid;
        justify-self: center;
        align-items: center;
        margin-top: 3rem;
        margin-bottom: 3rem;
        padding: 0 0.5rem;
        grid-column: 1 / span 3;
        text-align: center;
        h1 {
            text-transform: uppercase;
            font-size: 6.1vmin;
            padding: 0 0.5rem 1rem;
        }
        h2 {
            padding: 1rem 0.5rem 0;
            font-size: 4.7vmin;
        }
        .headVideo {
            width: 100%;
        }
    }
    .sectionTitle {
        width: 83.5%;
        grid-column: 1 / span 3;
        text-align: left;
        font-size: 3rem;
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
        .header,
        .sectionTitle {
            grid-column: 1 / span 2;
        }
    }
    @media only screen and (max-width: 780px) {
        grid-template-columns: repeat(1, minmax(auto, 1fr));
        .postCard {
            width: 400px;
            height: 300px;
        }
        .header,
        .sectionTitle {
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

export default function HomeTemplate({ data }) {
    const posts = data.posts.nodes;
    const home = data.home.nodes;
    return (
        <>
            <Seo title="Home Page" />
            <HomeStyles>
                <div className="header">
                    <h1>What is a good website?</h1>
                    {home.map((main) => (
                        <div key={main.id}>
                            {main.video === null ? (
                                <MuxPlayer className="headVideo" />
                            ) : (
                                <MuxPlayer
                                    className="headVideo"
                                    streamType="on-demand"
                                    playbackId={main.video.asset.playbackId}
                                    metadata={{
                                        video_id: `${main.video.asset.assetId}`,
                                        video_title: `${main.title}`,
                                    }}
                                />
                            )}
                        </div>
                    ))}
                    <h2>Six Categories for an Amazing Website</h2>
                </div>
                <h2 className="sectionTitle">Website Reviews</h2>
                {posts.map((post) => (
                    <div className="postCard" key={post.id}>
                        {post.video === null ? (
                            <MuxPlayer />
                        ) : (
                            <MuxPlayer
                                streamType="on-demand"
                                playbackId={post.video.asset.playbackId}
                                metadata={{
                                    video_id: `${post.video.asset.assetId}`,
                                    video_title: `${post.title}`,
                                }}
                            />
                        )}
                        <Link to={`/posts/${post.slug.current}`}>
                            <h3>{post.title}</h3>
                        </Link>
                        <h4>Video by: {post.author.name}</h4>
                    </div>
                ))}
            </HomeStyles>
        </>
    );
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
        home: allSanityHomepage {
            nodes {
                id
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
