'use client'

import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

export function Photos({
  rotated = false,
  className = '',
  photos,
}: {
  rotated?: boolean
  className?: string
  photos: Array<ImageProps>
}) {
  let id = useId()

  return (
    <div className={clsx(className, 'mt-16 sm:mt-20')}>
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {photos.map((photo, photoIndex) => (
          <div
            key={photoIndex}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotated && [
                'rotate-2',
                photoIndex % 2 === 0 && '-rotate-2',
                'hover:rotate-0',
              ],
            )}
          >
            <Image
              {...photo}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
} 