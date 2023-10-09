'use client'

import Container from '@/components/Container';
import FadeIn from '@/components/FadeIn';
import Title from '@/components/Title';
import React from 'react';

function ContactPage() {
  return (
    <Container>
      <div className="flex flex-col gap-6 p-8">
        <FadeIn>
          <Title title={'一緒に未来を築きましょう'} />
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <p className="max-w-2xl">
              私たちは未来を共に築く仲間を探しています。私たちのビジョンと使命に共感し、一緒に変革を実現しましょう。一歩踏み出し、未来を明るくしましょう。
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}

export default ContactPage;
