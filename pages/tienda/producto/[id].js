import { useRouter } from 'next/router'
import Image from 'next/image';

export default function Producto({ pokemon }) {
    const router = useRouter()
    const { id } = router.query;
    const { sprites: { front_default } = {}} = pokemon || {};


    return (
        <div>
            { pokemon &&
                <Image 
                    loader={() => front_default}
                    src={front_default}
                    alt={"pokemon image"} 
                    width={100}
                    height={100}
                    unoptimized
                    priority
                />
            }
        </div>
    )
}

export async function getStaticPaths() {
    const paths = Array(5).fill(0).map((e, index) => {
        return {
            params: {
                id: `${index + 1}`
            }
        }
    });

    return {
      paths,
      fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const pokemon = await res.json()

    return { 
        props: { 
            pokemon
        }   
    }
  }