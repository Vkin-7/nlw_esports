import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { convertHoursStringToMinutes, convertMinutesToHourString } from './utils/convert-time';

const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN_DOMAIN || ''
}));

const prismaClient = new PrismaClient();

app.get('/games', async (req, res) => {
    const games = await prismaClient.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    });
    
    return res.json(games);
});

app.post('/game/:id/ads', async (req, res) => {
    const gameId = req.params.id;
    const { body } = req;

    const ad = await prismaClient.ad.create({ 
        data: { 
            ...body, 
            gameId, 
            weekDays: body.weekDays.join(','),
            hourStart: convertHoursStringToMinutes(body.hourStart),
            hourEnd: convertHoursStringToMinutes(body.hourEnd),
        } 
    });

    return res.status(201).json(ad);
});

app.get('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id;

    const ads = await prismaClient.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId
        },
        orderBy: {
            createdAt: 'desc',
        }
    });

    return res.send(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd),
        }
    }));
});

app.get('/ads/:id/discord', async (req, res) => {
    const adId = req.params.id;

    const ad = await prismaClient.ad.findFirst({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    });

    return res.send(ad);
});

app.listen(3333);