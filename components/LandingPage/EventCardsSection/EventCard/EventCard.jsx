import React from "react";
import Image from "next/image";

import styles from './EventCard.module.css';

const EventCard = ({ imgUrl, name, desc, date }) => {
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-ful" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
            <div className="pt-6 space-y-4">
                <blockquote>
                <p className="text-lg">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                </p>
                </blockquote>
                <figcaption>
                <div>
                    Sarah Dayan
                </div>
                <div>
                    Staff Engineer, Algolia
                </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default EventCard;