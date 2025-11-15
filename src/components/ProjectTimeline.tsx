"use client";

import React from 'react';
import type { TimelineStep } from '../i18n/dictionaries';

interface ProjectTimelineProps {
	title: string;
	subtitle: string;
	steps: TimelineStep[];
	ctaText: string;
	onCtaClick?: () => void;
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ title, subtitle, steps, ctaText, onCtaClick }) => {
	return (
		<div className="max-w-6xl mx-auto text-white">
			<div className="text-center mb-12">
				<p className="uppercase tracking-[0.4em] text-sm text-white/70 mb-3">{subtitle}</p>
				<h2 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
			</div>
			<div className="relative">
				<div className="hidden md:block absolute left-6 top-0 bottom-0">
					<div className="w-px h-full bg-white/20" />
				</div>
				<div className="space-y-6">
					{steps.map((step, index) => (
						<div
							key={`${step.phase}-${step.title}`}
							className="relative flex flex-col md:flex-row gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
						>
							<div className="flex md:flex-col items-center md:items-start gap-3">
								<div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 grid place-items-center text-2xl font-bold">
									{step.phase}
								</div>
								<div>
									<p className="text-xs uppercase tracking-[0.3em] text-white/60">{step.duration}</p>
									<p className="font-semibold text-white/90">Step {index + 1}</p>
								</div>
							</div>
							<div className="flex-1">
								<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
								<p className="text-white/80 leading-relaxed">{step.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="text-center mt-12">
				<button
					onClick={onCtaClick}
					className="inline-flex items-center gap-2 bg-white text-hijaukan-dark hover:bg-hijaukan-light px-8 py-3 rounded-full font-semibold transition-colors"
				>
					{ctaText}
				</button>
			</div>
		</div>
	);
};

export default ProjectTimeline;
