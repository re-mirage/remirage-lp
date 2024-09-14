import React from 'react';
import { Badge } from './ui/badge';
import { useQueryParams } from '@/hooks/useQueryParams';
import { paths } from '@/routes/paths';

interface TechnologiesListProps {
    technologies: string[];
    limit?: number;
    startTransition?: any;
}

export default function TechnologiesBadgeList({ technologies, limit, startTransition }: TechnologiesListProps) {
    const { push } = useQueryParams({ startTransition, path: paths.landing.projects.root() });
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, limit).map((tech) => (
                <Badge
                    variant="outline"
                    key={tech}
                    className="text-xs cursor-pointer px-4 py-2 hover:bg-primary-500"
                    onClick={(e) => {
                        e.stopPropagation();
                        push({ tech: tech })
                    }
                    }
                >
                    {tech}
                </Badge>
            ))}
            {limit && technologies.length > limit && (
                <Badge variant="outline"
                    className="text-xs cursor-pointer px-4 py-2 hover:bg-primary-500">
                    +{technologies.length - limit}
                </Badge>
            )}
        </div>
    );
}