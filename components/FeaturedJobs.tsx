'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface FeaturedJobsProps {
  language: 'vi' | 'en'
  onApplyClick?: (job: any) => void
}

const portalNewsData = {
  policy: {
    hero: {
      img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=700&q=80',
      title: '习近平会见国际经贸与全球供应链合作代表团 强化多边协同与高质量发展',
      link: '#',
    },
    news: [
      { text: '习近平复信国际青年技能与供应链创新研修班全体学员', date: '09-26' },
      { text: '李强出席2026年全球供应链创新与人力资本发展大会并致开幕辞', date: '09-25' },
      { text: '第48届国际技能大会在上海隆重开幕 聚焦智能物流与高端制造', date: '09-24' },
      { text: '全国多式联运高质量发展推进会召开 加快现代流通体系建设', date: '09-24' },
      { text: '李强会见世界技能组织主席与全球领军物流集团首席执行官', date: '09-23' },
    ],
  },
  news: {
    hero: {
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80',
      title: '全国智慧港口铁水联运集装箱吞吐量突破1200万标箱 供应链韧性持续攀升',
      link: '#',
    },
    news: [
      { text: '交通运输部：前三季度综合货运物流保通保畅成效显著 骨干网络运行通畅', date: '09-26' },
      { text: '商务部等5部门：加速数字技术在跨境供应链与现代物流全链路示范应用', date: '09-25' },
      { text: '粤港澳大湾区与长三角综合立体交通网加快形成 重点行业物流成本下降7.2%', date: '09-24' },
      { text: '人社部发布三季度全国人力资源市场供求报告：智能物流与算法工程师紧缺', date: '09-23' },
      { text: '中国—东盟国际智慧物流骨干网络示范线路全线贯通 综合通关时效提升40%', date: '09-22' },
    ],
  },
  work: {
    hero: {
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
      title: '2026年高质量充分就业攻坚行动全面推进 培育壮大新质生产力技能人才集群',
      link: '#',
    },
    news: [
      { text: '人力资源社会保障部部署启动2026年秋季重点产业链企业直聘与引才行动', date: '09-26' },
      { text: '产教深度融合：首批50个国家级数字物流与供应链创新联合体正式挂牌', date: '09-25' },
      { text: '人社部联合印发新一批国家职业标准：数字物流师、供应链风险分析师等入列', date: '09-24' },
      { text: '全国骨干企业跨区域用工服务对接协作平台上线 覆盖超500万技能人才', date: '09-23' },
      { text: '构建和谐劳动用工生态：全国现代供应链重点企业用工合规指引发布', date: '09-21' },
    ],
  },
}

const specialTopics = [
  {
    title: '深入学习贯彻关于现代流通体系建设重要论述',
    badge: '专题',
    badgeBg: 'bg-red-600',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: '《人力资源与现代物流供应链发展“十五五”规划》系列解读',
    badge: '规划解读',
    badgeBg: 'bg-blue-600',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: '人工智能+就业服务探索：赋能供应链与智慧港口',
    badge: 'AI+探索',
    badgeBg: 'bg-sky-600',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: '【人社日课】每天分享一个劳动用工与合规风险防范要点',
    badge: '人社日课',
    badgeBg: 'bg-amber-600',
    img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: '【月·读】2026年企业物流人才薪酬与用工景气指数报告',
    badge: '月·读',
    badgeBg: 'bg-emerald-600',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: '新职业炫季：聚焦跨境电商运营、智能调度与数字化仓储',
    badge: '新职业',
    badgeBg: 'bg-purple-600',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80',
  },
]

export default function FeaturedJobs({ language }: FeaturedJobsProps) {
  const [activeTab, setActiveTab] = useState<'policy' | 'news' | 'work'>('policy')
  const currentData = portalNewsData[activeTab]

  return (
    <section className="bg-white dark:bg-gray-900 py-8 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left/Center Box: Vertical Tabs + Hero Story + News Headlines (8 Cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm flex flex-col md:flex-row overflow-hidden">
            
            {/* Vertical Tabs Strip */}
            <div className="w-full md:w-14 bg-gray-50 dark:bg-gray-800/80 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 flex flex-row md:flex-col shrink-0">
              <button
                type="button"
                onClick={() => setActiveTab('policy')}
                className={`flex-1 flex items-center justify-center py-3 md:py-6 px-3 md:px-0 text-sm md:text-[15px] font-bold tracking-widest transition-all relative ${
                  activeTab === 'policy'
                    ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-extrabold border-b-2 md:border-b-0 md:border-l-4 border-red-600'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                } [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl]`}
              >
                时政要闻
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('news')}
                className={`flex-1 flex items-center justify-center py-3 md:py-6 px-3 md:px-0 text-sm md:text-[15px] font-bold tracking-widest transition-all relative ${
                  activeTab === 'news'
                    ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-extrabold border-b-2 md:border-b-0 md:border-l-4 border-red-600'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                } [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl]`}
              >
                重要新闻
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('work')}
                className={`flex-1 flex items-center justify-center py-3 md:py-6 px-3 md:px-0 text-sm md:text-[15px] font-bold tracking-widest transition-all relative ${
                  activeTab === 'work'
                    ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-extrabold border-b-2 md:border-b-0 md:border-l-4 border-red-600'
                    : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                } [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl]`}
              >
                中心工作
              </button>
            </div>

            {/* Center Content Area */}
            <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
              <div>
                {/* Hero Story Row */}
                <div className="flex flex-col sm:flex-row gap-5 items-start mb-4">
                  <div className="w-full sm:w-[250px] h-[160px] rounded overflow-hidden shrink-0 shadow-sm relative bg-gray-100 dark:bg-gray-700">
                    <img
                      src={currentData.hero.img}
                      alt={currentData.hero.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between sm:h-[160px]">
                    <h3 className="text-lg md:text-[19px] font-bold text-gray-900 dark:text-white leading-snug line-clamp-3 hover:text-primary transition-colors cursor-pointer">
                      {currentData.hero.title}
                    </h3>
                    <div className="flex items-center justify-between mt-3 sm:mt-auto pt-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-1.5 rounded-sm bg-red-600"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                      </div>
                      <Link href="/jobs" className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                        阅读原文 &gt;
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>

                {/* 5 News Items */}
                <ul className="space-y-2.5">
                  {currentData.news.map((item, idx) => (
                    <li key={idx}>
                      <Link href="/jobs" className="group flex items-center justify-between py-1 text-sm transition-colors">
                        <div className="flex items-center gap-2 overflow-hidden flex-1">
                          <span className="text-gray-400 font-mono font-bold text-xs shrink-0 group-hover:text-primary transition-colors">::</span>
                          <span className="text-gray-800 dark:text-gray-200 truncate group-hover:text-primary transition-colors font-medium">
                            {item.text}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 shrink-0 ml-4 font-mono">
                          {item.date}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Footer More */}
              <div className="border-t border-gray-100 dark:border-gray-700/60 pt-3 mt-3 flex justify-end">
                <Link href="/jobs" className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                  了解更多 &gt;
                </Link>
              </div>
            </div>

          </div>

          {/* Right Box: Special Topics (专题资讯) (4 Cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">专题资讯</h3>
              </div>

              {/* 2x3 Grid of 6 Cards */}
              <div className="grid grid-cols-2 gap-3">
                {specialTopics.map((topic, idx) => (
                  <Link key={idx} href="/jobs" className="group flex flex-col gap-1.5">
                    <div className="w-full h-[88px] rounded overflow-hidden relative shadow-xs bg-gray-100 dark:bg-gray-700">
                      <img
                        src={topic.img}
                        alt={topic.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className={`absolute top-1.5 left-1.5 text-[10px] font-bold text-white px-1.5 py-0.5 rounded shadow-xs ${topic.badgeBg}`}>
                        {topic.badge}
                      </span>
                    </div>
                    <span className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                      {topic.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Footer More */}
            <div className="border-t border-gray-100 dark:border-gray-700/60 pt-3 mt-4 flex justify-end">
              <Link href="/jobs" className="text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                了解更多 &gt;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
