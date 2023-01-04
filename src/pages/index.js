import MuxPlayer from '@mux/mux-player-react';
import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Seo from '../components/Seo';

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
            max-width: 485px;
            margin: 0 auto;
            padding: 0 2rem 5rem;
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
        padding-bottom: 5rem;
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
    @media only screen and (max-width: 320px) {
        .header h1 {
            font-size: 3.5rem;
        }
        .header h2 {
            font-size: 1.5rem;
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
                    <h1>What Makes a website good?</h1>
                    <h2>
                        Six categories that make or break a website and the one thing that rules
                        them all
                    </h2>
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
