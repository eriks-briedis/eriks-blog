import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { PortableText } from '@portabletext/react';
import client from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import { Container, Heading, Image, Link, Stack } from "@chakra-ui/react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface PostProps {
  post: {
    slug: {
      current: string;
    };
    title: string;
    body: any[];
    mainImage?: SanityImageSource;
  };
}

const urlFor = (source) => {
  return imageUrlBuilder(client).image(source);
}

const Post = ({ post }: PostProps) => {
  const {
    title = '',
    body = [],
    mainImage,
  } = post;
  console.log(post);

  return (
    <article>
      <Stack spacing={8} align="center">
        {mainImage && <Image src={urlFor(mainImage).url()} />}
        <Container>
          <Heading mb="4">{ title }</Heading>
          <PortableText
            value={body}
            components={{
              block: ({children}) => <p style={{marginBottom: '15px'}}>{children}</p>,
              list: (({ children }) => <ul style={{marginLeft: '20px'}}>{children}</ul>),
            }}
          />
        </Container>
      </Stack>
    </article>
  );
}


export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { slug = '' } = context.params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug },
  )

  return {
    props: {
      post,
    }
  }
}

export default Post;