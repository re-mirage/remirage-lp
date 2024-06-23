import { Button } from '@/components/buttons/button';
import SectionContainer from '@/components/containers/SectionContainer';
import Iconify from '@/components/Iconify';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

enum Industry {
  Mobile = 'Mobile',
  Web = 'Web',
  Backend = 'Backend',
  DevOps = 'DevOps',
  MachineLearning = 'Machine Learning',
}
const Technologiess = [
  {
    Industry: Industry.Mobile,
    description: 'We develop mobile apps for both iOS and Android platforms.',
    value: 'mobile',
  },
];
function TechnologyCard() {
  // return technology icon + title under it
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
      <p>Mobile</p>
      <Iconify icon="tabler:brand-react-native" />
    </div>
  );
}
const technologies = [
  {
    title: 'Mobile',
    description: 'We develop mobile apps for both iOS and Android platforms.',
    value: 'mobile',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Mobile</p>
        React Native, Swift, Kotlin
        <Iconify icon="tabler:brand-react-native" />
      </div>
    ),
  },
  {
    title: 'Web',
    description: 'We develop web applications using modern frameworks.',
    value: 'web',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Web</p>
        React, Angular, Vue
      </div>
    ),
  },
  {
    title: 'Backend',
    description: 'We develop backend services using modern frameworks.',
    value: 'backend',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Backend</p>
        Node.js, Django, Spring
      </div>
    ),
  },
  {
    title: 'DevOps',
    description: 'We provide DevOps services to automate your development process.',
    value: 'devops',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>DevOps</p>
        Docker, Kubernetes, Jenkins
      </div>
    ),
  },
  {
    title: 'Machine Learning',
    description: 'We provide machine learning services to automate your business processes.',
    value: 'ml',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Machine Learning</p>
        TensorFlow, PyTorch, Scikit-learn
      </div>
    ),
  },
];
export default function Technologies() {
  return (
    <SectionContainer>
      {/* /Technology section headline */}
      <h2 className="text-3xl font-medium text-center py-8">Technologies we work with</h2>
      <Tabs defaultValue={technologies[0].value} className="w-full">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5">
          {technologies.map((technology) => (
            <TabsTrigger key={technology.value} value={technology.value}>
              {technology.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* TabsContent components should be placed here */}
        {technologies.map((technology) => (
          <TabsContent key={technology.value} value={technology.value}>
            <Card>
              <CardHeader>
                <CardTitle>{technology.title}</CardTitle>
                <CardDescription>{technology.description}</CardDescription>
              </CardHeader>
              <CardContent>{technology.content}</CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </SectionContainer>
  );
}
