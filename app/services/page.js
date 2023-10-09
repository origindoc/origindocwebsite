'use client';

import Container from '@/components/Container';
import FadeIn from '@/components/FadeIn';
import Title from '@/components/Title';
import React from 'react';

function ServicesPage() {
  return (
    <Container>
      <div className="flex flex-col gap-6 p-8">
        <FadeIn>
          <Title title={'簡単なレポートアプリです'} />
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col  md:flex-row items-center gap-10">
            <p className="max-w-2xl">
              シンプルなレポート作成:
              高度な技術やデザインスキルが不要。直感的なインターフェースで、わずか数分でプロフェッショナルなレポートを作成できます。
            </p>
            <p className="max-w-2xl">
              データ可視化ツール:
              グラフやチャートを簡単に追加し、データを鮮やかに可視化。インサイトを素早く理解しましょう。インサイトを素早く理解しましょう。
            </p>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col  md:flex-row items-center gap-10">
            <p className="max-w-2xl">
              セキュリティとプライバシー:
              あなたのデータは厳重に保護され、安全に管理されます。業界トップクラスのセキュリティ対策を採用しています。
            </p>
            <p className="max-w-2xl">
              自動データ連携: ExcelやGoogle
              Sheetsからデータを簡単にインポートし、自動的にレポートに反映させます。手作業のデータ入力を削減しましょう。
            </p>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}

export default ServicesPage;
