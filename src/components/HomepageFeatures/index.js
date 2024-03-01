import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '工路快聘直播课',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        工路快聘直播课专为新经纪人设计，在这里你可以学习到最新的抖音直播课程与知识，关注到最新的抖音直播资讯及问题总结，迅速成长为直播达人
      </>
    ),
  },
  {
    title: '工路快聘交付课',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          工路快聘 为所有加入的经纪人提供长期培训，旨在提升所有交付伙伴的交付成功率，并为求职者提供规范，便捷，真实，高效的服务。
      </>
    ),
  },
  {
    title: '加入工路快聘',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          如果您选择加入工路快聘，您收获的不仅是一份工作，而是一份可以长期坚持并且越做越大的事业。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
