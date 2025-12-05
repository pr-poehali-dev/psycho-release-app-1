import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

type Mood = 'great' | 'good' | 'neutral' | 'sad' | 'stressed' | null;

const Index = () => {
  const [currentMood, setCurrentMood] = useState<Mood>(null);
  const [activeTab, setActiveTab] = useState('home');

  const moods: { value: Mood; emoji: string; label: string }[] = [
    { value: 'great', emoji: '😊', label: 'Отлично' },
    { value: 'good', emoji: '🙂', label: 'Хорошо' },
    { value: 'neutral', emoji: '😐', label: 'Нормально' },
    { value: 'sad', emoji: '😔', label: 'Грустно' },
    { value: 'stressed', emoji: '😰', label: 'Тревожно' },
  ];

  const meditations = [
    { id: 1, title: 'Утренняя медитация', duration: '10 мин', category: 'Энергия', image: 'https://cdn.poehali.dev/projects/7b999a5c-0c38-4bca-93e6-5bf5695503f3/files/f7b91dcd-f700-4b94-bbef-1ba97ff2d245.jpg', premium: false },
    { id: 2, title: 'Глубокое дыхание', duration: '5 мин', category: 'Снятие стресса', image: 'https://cdn.poehali.dev/projects/7b999a5c-0c38-4bca-93e6-5bf5695503f3/files/9e556518-357a-49e8-a4a7-885b44b521b5.jpg', premium: false },
    { id: 3, title: 'Вечерняя релаксация', duration: '15 мин', category: 'Сон', image: 'https://cdn.poehali.dev/projects/7b999a5c-0c38-4bca-93e6-5bf5695503f3/files/7ec41746-ace9-412f-921e-0b6dd65929ca.jpg', premium: true },
    { id: 4, title: 'Осознанность', duration: '12 мин', category: 'Медитация', image: 'https://cdn.poehali.dev/projects/7b999a5c-0c38-4bca-93e6-5bf5695503f3/files/f7b91dcd-f700-4b94-bbef-1ba97ff2d245.jpg', premium: true },
  ];

  const exercises = [
    { id: 1, title: 'Дыхание 4-7-8', description: 'Техника для быстрого успокоения', icon: 'Wind', premium: false },
    { id: 2, title: 'Прогрессивная релаксация', description: 'Расслабление групп мышц', icon: 'Sparkles', premium: false },
    { id: 3, title: 'Визуализация', description: 'Погружение в природный ландшафт', icon: 'Mountain', premium: true },
    { id: 4, title: 'Аффирмации', description: 'Позитивные установки на день', icon: 'Heart', premium: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/20 to-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="Sparkles" className="text-primary" size={20} />
            </div>
            <h1 className="text-xl font-bold text-foreground">Дыши</h1>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="User" size={16} className="mr-2" />
            Профиль
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="home" className="gap-2">
              <Icon name="Home" size={16} />
              <span className="hidden sm:inline">Главная</span>
            </TabsTrigger>
            <TabsTrigger value="meditations" className="gap-2">
              <Icon name="Brain" size={16} />
              <span className="hidden sm:inline">Медитации</span>
            </TabsTrigger>
            <TabsTrigger value="exercises" className="gap-2">
              <Icon name="Wind" size={16} />
              <span className="hidden sm:inline">Упражнения</span>
            </TabsTrigger>
            <TabsTrigger value="pricing" className="gap-2">
              <Icon name="Crown" size={16} />
              <span className="hidden sm:inline">Тарифы</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="gap-2">
              <Icon name="TrendingUp" size={16} />
              <span className="hidden sm:inline">Прогресс</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-8 animate-fade-in">
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardHeader>
                <CardTitle className="text-2xl">Как вы себя чувствуете?</CardTitle>
                <CardDescription>Выберите ваше настроение, и мы подберём практику</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 justify-center flex-wrap">
                  {moods.map((mood) => (
                    <button
                      key={mood.value}
                      onClick={() => setCurrentMood(mood.value)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all hover:scale-110 ${
                        currentMood === mood.value
                          ? 'bg-primary text-primary-foreground shadow-lg scale-110'
                          : 'bg-card hover:bg-accent'
                      }`}
                    >
                      <span className="text-3xl">{mood.emoji}</span>
                      <span className="text-sm font-medium">{mood.label}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {currentMood && (
              <Card className="animate-scale-in border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Sparkles" className="text-primary" />
                    Рекомендации для вас
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-secondary/50 rounded-xl">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Sun" size={20} />
                      Практика дня
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {currentMood === 'stressed' && 'Попробуйте дыхание 4-7-8 для снятия тревоги'}
                      {currentMood === 'sad' && 'Аффирмации помогут поднять настроение'}
                      {currentMood === 'neutral' && 'Утренняя медитация для бодрости'}
                      {currentMood === 'good' && 'Поддержите состояние осознанной медитацией'}
                      {currentMood === 'great' && 'Отличный день для глубокой практики!'}
                    </p>
                    <Button className="w-full">
                      <Icon name="Play" size={16} className="mr-2" />
                      Начать сеанс
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="Music" size={20} />
                    Фоновые звуки
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {['Дождь', 'Океан', 'Лес', 'Белый шум'].map((sound) => (
                    <Button key={sound} variant="outline" className="w-full justify-start">
                      <Icon name="Volume2" size={16} className="mr-2" />
                      {sound}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="BookOpen" size={20} />
                    Дневник настроения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Отслеживайте изменения настроения и получайте персональные инсайты
                  </p>
                  <Button variant="outline" className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить запись
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="meditations" className="space-y-6 animate-fade-in">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-3xl font-bold">Библиотека медитаций</h2>
              <p className="text-muted-foreground">Найдите практику для любой ситуации</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {meditations.map((meditation) => (
                <Card key={meditation.id} className="border-none shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={meditation.image}
                      alt={meditation.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {meditation.premium && (
                      <Badge className="absolute top-4 right-4 bg-primary">
                        <Icon name="Crown" size={12} className="mr-1" />
                        Premium
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge variant="secondary" className="mb-2">
                        {meditation.category}
                      </Badge>
                      <h3 className="text-xl font-bold">{meditation.title}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {meditation.duration}
                      </span>
                      <Button size="sm">
                        <Icon name="Play" size={14} className="mr-1" />
                        Слушать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exercises" className="space-y-6 animate-fade-in">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-3xl font-bold">Практики и упражнения</h2>
              <p className="text-muted-foreground">Техники для снятия стресса и улучшения самочувствия</p>
            </div>

            <div className="grid gap-4">
              {exercises.map((exercise) => (
                <Card key={exercise.id} className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4 items-start flex-1">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon name={exercise.icon as any} className="text-primary" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">{exercise.title}</h3>
                            {exercise.premium && (
                              <Badge variant="outline" className="text-xs">
                                <Icon name="Crown" size={10} className="mr-1" />
                                Premium
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{exercise.description}</p>
                        </div>
                      </div>
                      <Button>
                        <Icon name="Play" size={16} className="mr-2" />
                        Начать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricing" className="space-y-8 animate-fade-in">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold">Выберите свой путь к спокойствию</h2>
              <p className="text-muted-foreground">Начните бесплатно или получите полный доступ</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
                    <Icon name="Leaf" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-2">Базовый</CardTitle>
                  <div className="text-4xl font-bold mb-2">Бесплатно</div>
                  <CardDescription>Идеально для начала практики</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {[
                      'Ежедневные рекомендации',
                      'Персональные советы',
                      'Краткие сеансы медитаций',
                      'Фоновые звуки природы',
                      'Техники дыхания',
                      'Дневник настроения',
                      'Аналитика сна',
                      'Аффирмации',
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Separator />
                  <Button variant="outline" className="w-full" size="lg">
                    Текущий тариф
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary shadow-2xl hover:shadow-3xl transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                  Популярный
                </div>
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Crown" className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-2">Premium</CardTitle>
                  <div className="text-4xl font-bold mb-2">990₽<span className="text-lg text-muted-foreground">/мес</span></div>
                  <CardDescription>Полный доступ ко всем возможностям</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-2">Всё из базового тарифа, плюс:</p>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Неограниченные медитации и звуки',
                      'Персонализированные программы',
                      'Глубокие техники дыхания',
                      'Онлайн консультации со специалистами',
                      'Продвинутые курсы с видео',
                      'Ранний доступ к новым функциям',
                      'Виртуальные природные ландшафты',
                      'Интеграция с умными часами',
                      'Индивидуальные упражнения',
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary shrink-0 mt-0.5" size={18} />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Separator />
                  <Button className="w-full" size="lg">
                    <Icon name="Sparkles" size={16} className="mr-2" />
                    Оформить Premium
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    7 дней бесплатно, отмена в любой момент
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6 animate-fade-in">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-3xl font-bold">Ваш прогресс</h2>
              <p className="text-muted-foreground">Отслеживайте свой путь к гармонии</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-none shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">7</span>
                  </div>
                  <CardTitle className="text-lg">Дней подряд</CardTitle>
                  <CardDescription>Практикуете регулярно</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-secondary/50 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">42</span>
                  </div>
                  <CardTitle className="text-lg">Минут</CardTitle>
                  <CardDescription>Суммарная практика</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">5</span>
                  </div>
                  <CardTitle className="text-lg">Сессий</CardTitle>
                  <CardDescription>Завершённых медитаций</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" size={20} />
                  Еженедельная цель
                </CardTitle>
                <CardDescription>5 из 7 дней выполнено</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={71} className="h-3" />
                <p className="text-sm text-muted-foreground mt-3">
                  Ещё 2 практики до достижения цели! 🎯
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Дневник настроения
                </CardTitle>
                <CardDescription>За последние 7 дней</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end h-32 gap-2">
                  {[60, 70, 55, 80, 85, 75, 90].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-primary/20 hover:bg-primary/40 transition-colors rounded-t-lg cursor-pointer relative group"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                        {height}%
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Пн</span>
                  <span>Вт</span>
                  <span>Ср</span>
                  <span>Чт</span>
                  <span>Пт</span>
                  <span>Сб</span>
                  <span>Вс</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Award" size={20} />
                  Достижения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { icon: 'Flame', name: 'Первая неделя', earned: true },
                    { icon: 'Star', name: '10 сессий', earned: false },
                    { icon: 'Zap', name: 'Утренняя птица', earned: true },
                    { icon: 'Moon', name: 'Вечерний ритуал', earned: false },
                  ].map((achievement) => (
                    <div
                      key={achievement.name}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl ${
                        achievement.earned ? 'bg-primary/10' : 'bg-muted/50 opacity-50'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        achievement.earned ? 'bg-primary/20' : 'bg-muted'
                      }`}>
                        <Icon name={achievement.icon as any} className={achievement.earned ? 'text-primary' : 'text-muted-foreground'} size={24} />
                      </div>
                      <span className="text-xs text-center">{achievement.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
